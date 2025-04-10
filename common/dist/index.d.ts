import z from "zod";
export declare const signupinput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signininput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const createbloginput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updatebloginput: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    title: string;
    id: string;
}, {
    password: string;
    title: string;
    id: string;
}>;
export type SignUpInput = z.infer<typeof signupinput>;
export type Signininput = z.infer<typeof signininput>;
export type CreateBloginput = z.infer<typeof createbloginput>;
export type UpdateBloginput = z.infer<typeof updatebloginput>;
