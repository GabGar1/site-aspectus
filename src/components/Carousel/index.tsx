import { Carousel, Image } from 'antd';

interface ICarouselImg {
    images: string[]
}

export function CarouselImg(params: ICarouselImg) {
    const { images } = params
    return (
            <Carousel style={{padding: "0px 12px"}}>
                {images.map((image, index) => (
                    <Image
                        alt={'img-carousel-'+index}
                        key={index + 1}
                        src={image}
                        width="100%"
                        height={350}
                        preview={false}
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    />
                ))}
            </Carousel>
    )
}