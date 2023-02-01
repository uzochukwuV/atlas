import Carousel from 'react-bootstrap/Carousel';

let data = {one:{name:"Soba Apartment", location:"Eastern west road off golf junction", link:"https://pixabay.com/images/id-1867187/"}
            ,two:{name:"Kitana Apartment", location:"West Port road off denis junction", link:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FjGggmwPHncRNy6B5BTvipD-415-80.jpg&imgrefurl=https%3A%2F%2Fwww.livingetc.com%2Fideas%2Fdecorating-an-apartment&tbnid=zBlN4nLvvNFOxM&vet=12ahUKEwjAycKpxfP8AhV-cKQEHfxQBtoQMygEegUIARDlAQ..i&docid=AqPY20K1BIGdTM&w=415&h=277&q=apartment%20interior%20design&ved=2ahUKEwjAycKpxfP8AhV-cKQEHfxQBtoQMygEegUIARDlAQ"},
            three:{name:"Freds palace", location:"jordan road opp Laptent", link:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.adsttc.com%2Fmedia%2Fimages%2F5be3%2F3a40%2F08a5%2Fe549%2Fe300%2F0315%2Fnewsletter%2F42442.jpg%3F1541618191&imgrefurl=https%3A%2F%2Fwww.archdaily.com%2F905461%2Fmodern-urban-apartment-in-tel-aviv-studio-perri-interior-design&tbnid=vWLXE977IF-V1M&vet=12ahUKEwjAycKpxfP8AhV-cKQEHfxQBtoQMygCegUIARDhAQ..i&docid=RO630g6kUUit0M&w=750&h=500&q=apartment%20interior%20design&ved=2ahUKEwjAycKpxfP8AhV-cKQEHfxQBtoQMygCegUIARDhAQ"}
        }

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.one.link}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{data.one.name}</h3>
          <p>{data.one.location}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.two.link}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{data.two.name}</h3>
          <p>{data.two.location}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.three.link}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{data.three.name}</h3>
          <p>
          {data.three.location}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;