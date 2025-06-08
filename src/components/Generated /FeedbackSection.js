// "use client";
// import * as React from "react";

// export const FeedbackSection: React.FC = () => {
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", { email, message });
//   };

//   return (
//     <section className="flex flex-col items-start mt-16 w-full max-w-[1183px] max-md:mt-10">
//       <h2 className="text-6xl text-black max-md:text-4xl">
//         Обратная связь
//       </h2>
//       <div className="flex flex-wrap gap-8 justify-between items-start mt-12 text-xl text-black max-md:mt-10">
//         <form onSubmit={handleSubmit} className="rounded-2xl min-w-60 w-[607px] max-md:max-w-full">
//           <div className="flex flex-col px-10 py-7 w-full bg-violet-200 rounded-2xl max-md:px-5 max-md:max-w-full">
//             <label htmlFor="email" className="self-start">
//               Ваша почта или ник в Telegram
//             </label>
//             <input
//               id="email"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder=" @girl2girl"
//               className="px-3 py-4 mt-3.5 rounded-2xl bg-stone-50 text-neutral-400 max-md:pr-5 max-md:max-w-full"
//             />
//             <label htmlFor="message" className="self-start mt-8">
//               Ваше сообщение
//             </label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Сообщение"
//               className="px-4 pt-4 pb-24 mt-3.5 whitespace-nowrap rounded-2xl bg-stone-50 text-neutral-400 max-md:pr-5 max-md:pb-28 max-md:max-w-full resize-none"
//             />
//             <button
//               type="submit"
//               className="gap-1.5 self-center px-20 py-1.5 mt-6 max-w-full text-3xl text-white whitespace-nowrap bg-indigo-600 rounded-2xl min-h-[52px] w-[323px] max-md:px-5"
//             >
//               Отправить
//             </button>
//           </div>
//         </form>
//         <div className="rounded-none min-w-60 w-[481px] max-md:max-w-full">
//           <div className="px-5 py-4 rounded-2xl border-4 border-violet-200 border-solid max-md:px-5 max-md:max-w-full">
//             У вас появились вопросы?
//           </div>
//           <div className="px-5 py-4 mt-4 rounded-2xl border-4 border-violet-200 border-solid max-md:pl-5 max-md:max-w-full">
//             Хотите предложить улучшения или поделиться впечатлениями
//             о проекте?{" "}
//           </div>
//           <div className="flex relative flex-col px-5 pt-5 pb-10 mt-4 text-black rounded-none min-h-[105px] max-md:px-5 max-md:max-w-full">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/098bc5df7b305b9270e7876201f9b386b4b56362?placeholderIfAbsent=true&apiKey=10f7e0b15baa4f05a0bef263ffc6eb14"
//               className="object-cover absolute inset-0 size-full"
//               alt="Background"
//             />
//             <p className="relative">
//               Напишите нам — мы читаем каждое сообщение и очень ценим обратную
//               связь
//             </p>
//           </div>
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/15afad5276aefe6aea0dca6ffe994501772cbc33?placeholderIfAbsent=true&apiKey=10f7e0b15baa4f05a0bef263ffc6eb14"
//             className="object-contain mt-6 aspect-[1.15] fill-neutral-800 w-[68px]"
//             alt="Decorative element"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };