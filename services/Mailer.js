// const sendgrid = require("sendgrid");
const keys = require("../config/keys");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: keys.mailGunKey,
});

// const helper = sendgrid.mail;

// class Mailer extends helper.Mail {
//   constructor({ subject, recipients }, content) {
//     super();

//     this.sgApi = sendgrid(keys.sendGridKey);
//     this.from_email = new helper.Email("matthew.defusco@gmail.com");
//     this.subject = subject;
//     this.body = new helper.Content("text/html", content);
//     this.recipients = this.formatAddresses(recipients);

//     this.addContent(this.body);
//     this.addClickTracking();
//     this.addRecipients();
//   }

//   formatAddresses(recipients) {
//     return recipients.map(({ email }) => {
//       return new helper.Email(email);
//     });
//   }

//   addClickTracking() {
//     const trackingSettings = new helper.TrackingSettings();
//     const clickTracking = new helper.ClickTracking(true, true);

//     trackingSettings.setClickTracking(clickTracking);
//     this.addTrackingSettings(trackingSettings);
//   }

//   addRecipients() {
//     const personalize = new helper.Personalization();
//     this.recipients.forEach((recipient) => {
//       personalize.addTo(recipient);
//     });
//     this.addPersonalization(personalize);
//   }

//   async send() {
//     const request = this.sgApi.emptyRequest({
//       method: "POST",
//       path: "/v3/mail/send",
//       body: this.toJSON(),
//     });

//     const response = await this.sgApi.API(request);
//     return response;
//   }
// }

class Mailer {
  constructor({ subject, recipients }, content) {
    this.data = {
      from: "no-reply@emaily.com",
      to: this.formatAddresses(recipients),
      subject: subject,
      html: content,
    };
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email).join(",");
  }

  async send() {
    const resp = await mg.messages.create("defuscom.cloudns.ph", this.data);
    return resp;
  }
}

module.exports = Mailer;
