import { createSignal } from "solid-js"
import { alContacts, ksContacts } from "../constants/contacts"
import { ContactCard } from "./ContactCard"
export const ContactGrid = () => {
  const [country, setCountry] = createSignal("al")
  const contacts = { "al": alContacts, "ks": ksContacts }
  return (
    <>
      <div class="flex p-2 lg:p-4 w-full justify-center lg:justify-end">
        <div class="join">
          <button class="btn btn-sm lg:btn-md join-item hover:btn-primary" classList={{ "btn-primary": country() === "al" }} onClick={() => setCountry("al")}>Shqipëri</button>
          <button class="btn btn-sm lg:btn-md join-item hover:btn-primary" classList={{ "btn-primary": country() === "ks" }} onClick={() => setCountry("ks")}>Kosovë</button>
        </div>
      </div>

      <div class="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 p-4 lg:p-12">
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
