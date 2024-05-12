import {Container} from 'react-bootstrap';
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className='bgSectionContactForm pt-5' id="contactForm">
      <Container className='pt-5 bgContactForm'>
            <div class="row justify-content-center">
            <div class="col-lg-9">
                <h1 class="mb-3">Contactez-nous</h1>
                <form className='pt-4'>
                <div class="row g-3">
                    <div class="col-md-6">
                    <label for="your-name" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="your-name" name="your-name" required></input>
                    </div>
                    <div class="col-md-6">
                    <label for="your-surname" class="form-label">Prénom</label>
                    <input type="text" class="form-control" id="your-surname" name="your-surname" required></input>
                    </div>
                    <div class="col-md-6">
                    <label for="your-email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="your-email" name="your-email" required></input>
                    </div>
                    <div class="col-md-6">
                    <label for="your-subject" class="form-label">Offre concernée</label>
                    <input type="text" class="form-control" id="your-subject" name="your-subject"></input>
                    </div>
                    <div class="col-12">
                    <label for="your-message" class="form-label">Message</label>
                    <textarea class="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                    </div>
                    <div class="col-12">
                    <div class="row pb-5">
                        <div class="col-md-6">
                        <button data-res="<?php echo $sum; ?>" type="submit" class="btn btn-dark w-100 fw-bold"> Envoyer</button>
                        </div>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
      </Container>
    </section>
  )
}

export default ContactForm