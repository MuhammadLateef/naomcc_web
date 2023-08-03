import { Transporter, MailOptions } from '@/lib/nodemailer';
import { render } from '@react-email/render';
import EmailTemplate from "@/components/emailTemplate";

export async function POST(req,res) {

  // if (req.method === 'POST') {

    const body = req.body;
    const { FName, LName,Email,Subject,Message } = body;
    const emailHtml = render(EmailTemplate({ FName: FName,LName: LName, email: Email,Subject:Subject,Message:Message}));

    if (!FName || !LName || !Email || !Subject || !Message ) {
      res.status(400).json({ data: "Http bad request" });
    }
    try {

      await Transporter.sendMail({
        ...MailOptions,
        subject: 'Message Contact Us Page',
        text: 'Contact from naomcc.org',
        html: emailHtml,});
      // }, (error) => {
      //   if (error) {
      //     return res.status(400).json({ data: "Internet Error" });
      //   }
      //   else {
      //     return res.status(200).json({ data: 'Success' });
      //   }
      // }
      // );
      return res.status(200).json({ data: 'Success' });
    }
    catch (error) {
      res.status(400).json({ data: "Internal Server Error" });
    }
  }

