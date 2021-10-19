import Article from './components/Article';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';
import transformImage from './assets/img/mobile/image-transform.jpg';
import standOutImage from './assets/img/mobile/image-stand-out.jpg';
import photographyImage from './assets/img/mobile/image-photography.jpg';
import graphicDesignImage from './assets/img/mobile/image-graphic-design.jpg';
import TextImage from './components/TextImage';
import Testimonals from './components/Testimonals';
import emilyImage from './assets/img/image-emily.jpg';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

const articles = [
  {
    headline: 'Transform your brand',
    text: 'We are a full-service creative agency, specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    accentColor: 'hsl(51, 100%, 49%)',
    imgUrl: transformImage,
  },
  {
    headline: 'Stand out to the right audience',
    text: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.`,
    accentColor: 'hsl(7, 99%, 70% )',
    imgUrl: standOutImage,
  },
];

const imageArticles = [
  {
    headline: 'Graphic Design',
    text: `Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.`,
    color: 'hsl(167, 40%, 24%)',
    imgUrl: graphicDesignImage,
  },
  {
    headline: 'Photography',
    text: `Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`,
    color: 'hsl(198, 62%, 26%)',
    imgUrl: photographyImage,
  },
];

const testimonals = [
  {
    name: 'Emily R.',
    role: 'Marketing Director',
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    imgUrl: emilyImage,
  },
  {
    name: 'Emily R.',
    role: 'Marketing Director',
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    imgUrl: emilyImage,
  },
  {
    name: 'Emily R.',
    role: 'Marketing Director',
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    imgUrl: emilyImage,
  },
];

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {articles.map((article) => (
        <Article {...article} key={article.headline} />
      ))}
      {imageArticles.map((article) => (
        <TextImage {...article} key={article.headline} />
      ))}
      <Testimonals testimonals={testimonals} />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
