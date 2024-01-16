import axios from 'axios'
const sendOrder = async (name, email, message) => {
    try {
        const botToken = '6825266870:AAFlGRqnHiBSIjNfHR_Iwdxiibx6EQeNMiM';
        const channelUsername = '-1002056520769';
        const text = `
            Name: ${name},\nEmail: ${email},\nMessage: ${message},\n
        `
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: channelUsername,
                text: text,
            }
        );
        if (response.status == 200) {
            return 'Message Sended'
        } else {
            alert('Error')
        }
    } catch (err) {
        console.log("Error", err);
    }
}

export default sendOrder