// import * as React from "react";

// interface EmergencyContact {
//   number: string;
//   description: string;
// }

// const emergencyContacts: EmergencyContact[] = [
//   {
//     number: "112",
//     description: "Единый номер экстренной помощи"
//   },
//   {
//     number: "8(499) 216-50-50",
//     description: "Горячая линии экстренной психологической помощи МЧС"
//   },
//   {
//     number: "8-800-7000-600",
//     description: "Tелефон доверия для женщин, подвергшихся домашнему насилию"
//   },
//   {
//     number: "8 800 100-49-94",
//     description: "Единый телефон доверия психологической помощи для взрослых и детей (круглосуточно)"
//   }
// ];

// export const EmergencyContactsSection: React.FC = () => {
//   return (
//     <section className="flex z-10 flex-col items-start self-center ml-11 w-full max-w-[1183px] max-md:max-w-full">
//       <p className="text-xl text-black max-md:max-w-full">
//         Если вам угрожает опасность — обратитесь по данным номерам:
//       </p>
//       <div className="flex flex-wrap gap-10 items-start self-stretch mt-10 max-md:max-w-full">
//         {emergencyContacts.map((contact, index) => (
//           <div key={index} className="flex flex-col grow shrink rounded-none min-w-[114px]">
//             <div className="self-start text-4xl text-pink-400">
//               {contact.number}
//             </div>
//             <div className="mt-2.5 text-xl text-black">
//               {contact.description}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
