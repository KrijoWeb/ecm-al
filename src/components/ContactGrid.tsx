import { createSignal } from "solid-js"
import { alContacts, ksContacts } from "../constants/contacts"
import { ContactCard } from "./ContactCard"
export const ContactGrid = () => {
  const [country, setCountry] = createSignal("al")
  const contacts = { "al": alContacts, "ks": ksContacts }
  return (
    <>
      <div class="flex p-4 w-full justify-end">
        <div class="join">
          <button class="btn join-item hover:btn-primary" classList={{ "btn-primary": country() === "al" }} onClick={() => setCountry("al")}>Shqipëri</button>
          <button class="btn join-item hover:btn-primary" classList={{ "btn-primary": country() === "ks" }} onClick={() => setCountry("ks")}>Kosovë</button>
        </div></div>

      <div class="grid flex-1 grid-cols-5 gap-6 p-12">
        {
          contacts[country()].map((contact) => (
            <ContactCard
              name={contact.name}
              title={contact.title}
              tel={contact.tel}
              fax={contact.fax}
              mobile={contact.mobile}
              email={contact.email}
            />
          ))
        }
      </div>
    </>

  )
}
