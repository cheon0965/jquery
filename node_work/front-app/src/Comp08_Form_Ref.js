//  start ref, event => from field
import { useState, useRef } from 'react';

export default function App() {
  let [form, setForm] = useState({ message: '', email: '' });
  let inputmessage = useRef(); // document.getElementById('')
  function handlerChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form>
        <input name="message" value={form.message} onChange={handlerChange} ref={inputmessage}></input>
        <input name="email" value={form.email} onChange={handlerChange}></input>
        <button
          type="button"
          onClick={() => {
            setForm({ message: '', email: '' });
            inputmessage.current.focus();
          }}
        >
          확인
        </button>
      </form>
    </>
  );
}
