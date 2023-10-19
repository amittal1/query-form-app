import Header from './components/header';
import Body from './components/button';
import myData from './form-data/query-form.json';

function HomePage() {
  const onsubmit = () => {
    console.log(htmlBody);
  }
  const headerJson = myData.header;
  const bodyJson = myData.body;
  const htmlBody = (
      <>
         <Header id={headerJson.id} title={headerJson.title} description={headerJson.description}></Header>
         <Body bodyJson={bodyJson} onsubmit={onsubmit}/>
      </>
  );
  return htmlBody;
}

export default HomePage;
