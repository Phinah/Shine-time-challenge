import React, { useState } from 'react';

export default function ContactForm() {
  const [contact, setContact] = useState({
    firstname: '',
    surname: '',
    email: '',
    phone: '',
    comment: '',
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-11">
      {/* inputs */}
      <div>
        <input
          type="text"
          placeholder="first name"
          className="text-base w-full bg-white py-4 px-3 rounded-md outline-none mb-6"
          value={contact.firstname}
          onChange={({ target }) =>
            setContact({ ...contact, firstname: target.value })
          }
        />
        <input
          type="text"
          placeholder="surname"
          className="text-base w-full bg-white py-4 px-3 rounded-md outline-none mb-6"
          value={contact.surname}
          onChange={({ target }) =>
            setContact({ ...contact, surname: target.value })
          }
        />
        <input
          type="email"
          placeholder="email"
          className="text-base w-full bg-white py-4 px-3 rounded-md outline-none mb-6"
          value={contact.email}
          onChange={({ target }) =>
            setContact({ ...contact, email: target.value })
          }
        />
        <input
          type="text"
          placeholder="phone number"
          className="text-base w-full bg-white py-4 px-3 rounded-md outline-none mb-6"
          value={contact.phone}
          onChange={({ target }) =>
            setContact({ ...contact, phone: target.value })
          }
        />
      </div>
      {/* textarea */}
      <div className="flex flex-col items-center">
        <textarea
          className="text-base w-full bg-white py-4 px-3 rounded-md outline-none mb-6"
          placeholder="additional comments"
          rows={7}
          value={contact.comment}
          onChange={({ target }) =>
            setContact({ ...contact, comment: target.value })
          }
        />
        <button
          className="bg-main text-xs md:text-xl text-white font-bold rounded-md py-2 px-3"
          onClick={() => {}}
        >
          contact us
        </button>
      </div>
    </div>
  );
}
