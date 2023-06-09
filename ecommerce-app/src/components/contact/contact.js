import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from './Contact.module.css'

const schema = yup
    .object({
        fullName: yup
            .string()
            .min(3, "Your full name should be at least 3 characters.")
            .required("Please enter your full name"),
        subject: yup
            .string()
            .min(3, "Your subject must be at lease 3 characters")
            .required("Your contact form must have a subject."),
        email: yup
            .string()
            .email()
            .required("You must provide an email"),
        body: yup
            .string()
            .min(3, "Your message must be at least 3 characters long")
            .required("Your contact form must have a message"),
    })
    .required();

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input  placeholder="Full name" {...register("fullName")} className={styles.formInput}/>
            <p>{errors.fullName?.message}</p>
            <input placeholder="Subject" {...register("subject")} className={styles.formInput}/>
            <p>{errors.subject?.message}</p>
            <input placeholder="Email" {...register("email")} className={styles.formInput}/>
            <p>{errors.email?.message}</p>
            <input placeholder="Your message" {...register("body")} className={styles.formMessage}/>
            <p>{errors.body?.message}</p>
            <input type="submit" className={styles.formBtn}/>
        </form>
    );
    }
