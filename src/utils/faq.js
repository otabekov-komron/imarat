import en from "../../public/locales/en.json"
import ru from "../../public/locales/ru.json"

let lang = localStorage.getItem('lang');

const FAQ = [
    {
        id: 1,
        title: lang === 'en' ? en.FAQ.faq1.Title : ru.FAQ.faq1.Title,
        desc: lang === 'en' ? en.FAQ.faq1.Text : ru.FAQ.faq1.Text
    },
    {
        id: 2,
        title: lang === 'en' ? en.FAQ.faq2.Title : ru.FAQ.faq2.Title,
        desc: lang === 'en' ? en.FAQ.faq2.Text : ru.FAQ.faq2.Text
    },
    {
        id: 3,
        title: lang === 'en' ? en.FAQ.faq3.Title : ru.FAQ.faq3.Title,
        desc: lang === 'en' ? en.FAQ.faq3.Text : ru.FAQ.faq3.Text
    },
    {
        id: 4,
        title: lang === 'en' ? en.FAQ.faq4.Title : ru.FAQ.faq4.Title,
        desc: lang === 'en' ? en.FAQ.faq4.Text : ru.FAQ.faq4.Text
    },
    {
        id: 5,
        title: lang === 'en' ? en.FAQ.faq5.Title : ru.FAQ.faq5.Title,
        desc: lang === 'en' ? en.FAQ.faq5.Text : ru.FAQ.faq5.Text
    },
    {
        id: 6,
        title: lang === 'en' ? en.FAQ.faq6.Title : ru.FAQ.faq6.Title,
        desc: lang === 'en' ? en.FAQ.faq6.Text : ru.FAQ.faq6.Text
    }
]

export default FAQ;