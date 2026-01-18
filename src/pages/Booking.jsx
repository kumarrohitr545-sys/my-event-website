import { useState } from "react"

export default function Booking() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [event, setEvent] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
New Booking Request 📢

Name: ${name}
Mobile: ${phone}
Event Type: ${event}
Event Date: ${date}
`

    const whatsappNumber = "919784784034" // yaha apna number daalo

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-xl w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl text-blue-400 font-bold text-center">
          Book Your Event
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-black text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          className="w-full p-3 rounded bg-black text-white"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Event Type (Wedding, Party...)"
          required
          className="w-full p-3 rounded bg-black text-white"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />

        <input
          type="date"
          required
          className="w-full p-3 rounded bg-black text-white"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
        >
          Book Now on WhatsApp
        </button>
      </form>
    </div>
  )
}
