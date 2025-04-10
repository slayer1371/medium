import z from "zod";

export const signupinput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

export const signininput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

export const createbloginput = z.object({
    title : z.string(),
    content : z.string()
})

export const updatebloginput = z.object({
    id : z.string(),
    title: z.string(),
    password : z.string()
})

//type inference in zod
export type SignUpInput = z.infer<typeof signupinput>;

export type Signininput = z.infer<typeof signininput>;

export type CreateBloginput = z.infer<typeof createbloginput>;

export type UpdateBloginput = z.infer<typeof updatebloginput>;
