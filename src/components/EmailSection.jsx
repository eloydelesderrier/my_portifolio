"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/images/githubIcon.svg";
import LinkedinIcon from "../../public/images/linkedinIcon.svg";
import Link from "next/link";
import Image from "next/image";


const EmailSection = () =>{
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        
        const JSONdata = JSON.stringify(data);
        const endpoint = 'api/send'
        
        const options = {
            method: "POST",
            headers:{
                "Content-Type": "aplication/json",
            },
            body: JSONdata,
        }
        console.log(options);

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        

        if (response.status === 200){
            setEmailSubmitted(true);
        }
    }
    return(
        <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Vamos nos conectar
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            No momento, estou procurando novas oportunidades, minha caixa de entrada está sempre aberta.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/eloydelesderrier">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/eloy-delesderrier/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email enviado com sucesso!!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Seu Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="examplo@exemplo.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Assunto
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Só dizendo oi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Vamos falor sobre..."
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </section>

    )
}

export default EmailSection;