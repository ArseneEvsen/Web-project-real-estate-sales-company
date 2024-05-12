import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

const [actualSentences, setActualSentences] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const sentences = ["votre famille.","des moments inoubliables.","être chez vous."];
const [text, setText] = useState('');
const [delta, setDelta] = useState(200);
const period = 1200;

useEffect(()=> {
    let ticker = setInterval(()=> {
        tick();
    }, delta)

    return () => {clearInterval(ticker)};
}, [text])

const tick = () => {
    let i = actualSentences % sentences.length;
    let fullText = sentences[i];
    let updatedText =  isDeleting ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);

 setText(updatedText);

 if(isDeleting) {
    setDelta(100)
 }

 if(!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setDelta(period);
 } else if(isDeleting && updatedText === '') {
    setIsDeleting(false);
    setActualSentences(actualSentences +1);
    setDelta(200);
 }
}

  return (
    <section className='bg' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className='tagline'>{`Ici, trouvez votre future maison,`} 
                        <br></br>
                        pour <span className='colorText strokeSmall'> {text} </span>
                    </h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner