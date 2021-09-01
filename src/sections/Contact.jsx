const Contact = () => (
  <div id="contact">
    <h2>Get in Touch</h2>
    <div id="contact-form">
      <form method="POST" action="https://formspree.io/f/yashrastogi@gmail.com">
        <input
          type="hidden"
          name="_subject"
          value="Contact request from personal website"
        />
        <input type="email" name="_replyto" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
);

Contact.displayName = "Contact";

export default Contact;
