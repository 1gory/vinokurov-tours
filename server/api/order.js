import express from 'express';
import path from 'path';
import fs from 'fs';
import mailer from '../services/mailer';
import config from '../config';

const router = express.Router();

const getMailBody = (data) => {
  let output = '';
  output += data.name ? `Имя: ${data.name} <br />` : '';
  output += data.phone ? `Телефон: ${data.phone} <br />` : '';
  output += data.email ? `Почта: ${data.email} <br />` : '';
  output += `<br />`;
  data.stepsData && data.stepsData.map(step => {
    output += `${step.question}: ${step.value}  <br />`;
  });
  return output;
};

router.post('/order', async (req, res, next) => {
  try {
    const {
      email,
      phone,
      name,
      stepsData,
      isBookletRequest,
    } = req.body;

    const mailBody = getMailBody({
      email,
      phone,
      name,
      stepsData
    });

    let subject = 'Заявака';

    if(isBookletRequest){
      subject = 'Запрос буклета';
    }

    mailer(
      subject,
      mailBody,
      config.notificationRecipient,
    );

    // Отправка буклета
    // if(isBookletRequest) {
    //   const body = await new Promise(resolve => {
    //     fs.readFile(path.join(__dirname, 'order.html'), "utf8", (err, contents) => (
    //       resolve(contents)
    //     ));
    //   });
    //
    //   mailer(
    //     'Материалы vinokurov-tours.ru',
    //     body,
    //     email,
    //   );
    // }

    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});

export default router;
