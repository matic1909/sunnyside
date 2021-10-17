import Article from './components/Article';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';
import transformImage from './assets/img/mobile/image-transform.jpg';
import standOutImage from './assets/img/mobile/image-stand-out.jpg';
import photographyImage from './assets/img/mobile/image-photography.jpg';
import graphicDesignImage from './assets/img/mobile/image-graphic-design.jpg';
import TextImage from './components/TextImage';

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

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {articles.map((article) => (
        <Article {...article} />
      ))}
      {imageArticles.map((article) => (
        <TextImage {...article} />
      ))}
    </div>
  );
}

export default App;
