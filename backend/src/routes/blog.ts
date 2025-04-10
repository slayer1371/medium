import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { createbloginput, updatebloginput } from "@slayer1371/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId : string
  }
}>();


blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("Authorization") || "";
  
    if (!authHeader.startsWith("Bearer ")) {
      return c.json({ error: "Invalid auth format" }, 403);
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      const response = await verify(token, c.env.JWT_SECRET);
  
      if (response && typeof response.id === "string") {
        c.set("userId", response.id);
        await next();
      } else {
        console.log("Invalid user ID in token");
        return c.json({ error: "Unauthorized" }, 403);
      }
    } catch (err) {
      console.error("JWT verification failed:", err);
      return c.json({ error: "Invalid token" }, 403);
    }
  });

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const authorId  = c.get("userId");
  const { success } = createbloginput.safeParse(body);
  if(!success)
  {
    c.status(411);
    return c.json({
        message : "Invalid inputs"
    })
  }

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
    },
  });

  return c.json({ id: post.id });
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = updatebloginput.safeParse(body)
  if(!success){
    c.status(411);
    return c.json({
        message : "Invalid inputs"
    })
  }

  const post = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({ id: post.id });
});

//eventually add pagination

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const posts = await prisma.post.findMany();
  
    return c.json({ posts });
  });
  

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const id = c.req.param("id");

  const body = await c.req.json();
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    return c.json({ post });
  } catch (e) {
    c.status(411);
    return c.json({ error: "Invalid" });
  }
});

