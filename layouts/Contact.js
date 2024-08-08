import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import {useForm} from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";

const radioButton = [
  {
    id: 'teh',
    text: 'Тех.поддержка'
  }
]


const Contact = ({ data }) => {
  const [formData, setFormData] = useState({name: '',tel:'',type:''});
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const REGEXP_PHONE = /^\+998\s(94|95|99|97|90|77|91|93|55|33|88|98)\s\d{3}\s\d{2}\s\d{2}$/
  const {
    register,
    formState: { errors },
    reset,
    watch
  } = useForm()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({name: '',tel:'',type:''});
    try {
      const response = await axios.get(`https://api.telegram.org/bot6407737642:AAG_Aa_eXtU8_fOhanGgnFR1-QwDFYhBmkM/sendMessage?parse_mode=HTML&chat_id=-1002188694607&text=Имя: ${formData.name};%0AТелефон: ${formData.tel};%0AТип: ${formData.type}`, formData);
      alert('Запрос отправлен')
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };



  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form h-full flex flex-col justify-center "
              onSubmit={handleSubmit}
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  type="text"
                  name="tel"
                  placeholder="Номер телефона"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <p className={`font-semibold`}>Выберите причину</p>
                <div className={`mb-1`}>
                  <input type="radio" id="html" name="type" className={`mr-1`} required onChange={handleChange} value="Тех.поддержка"/>
                  <label htmlFor="html">Тех.поддержка</label>
                </div>
                <div className={`mb-1`}>
                  <input type="radio" id="css" name="type" className={`mr-1`} required onChange={handleChange} value="Продажа"/>
                  <label htmlFor="css">Продажа</label>
                </div>
                <div className={`mb-1`}>
                  <input type="radio" id="javascript" className={`mr-1`} name="type" required onChange={handleChange} value="Для сотрудничество"/>
                  <label htmlFor="javascript">Для сотрудничество</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-80">
                Отправить
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
