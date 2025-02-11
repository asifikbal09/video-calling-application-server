import { z } from "zod";


const createUserValidationSchema = z.object({
    body:z.object({
        name:z.string(),
        email:z.string().email(),
        password:z.string(),
        profileImg:z.string().optional()
    })
})

export const UserValidations={
    createUserValidationSchema,
}