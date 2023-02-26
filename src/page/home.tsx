import Hero from '~/components/home/Hero/Hero'
import TrustedBy from '~/components/home/TrustedBy/TrustedBy'
import ProductItem from '~/components/home/ProductItem/ProductItem'
import Slider from '~/components/common/Slider/Slider'

const items = [
    <ProductItem
        title="Add talent to AI"
        name="AI Artists"
        src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />,
    <ProductItem
        title="Add talent to AI"
        name="AI Artists"
        src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />,
    <ProductItem
        title="Add talent to AI"
        name="AI Artists"
        src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />,
    <ProductItem
        title="Add talent to AI"
        name="AI Artists"
        src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />,
    <ProductItem
        title="Add talent to AI"
        name="AI Artists"
        src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    />,
]

export default function Home() {
    return (
        <div>
            <Hero />
            <TrustedBy />
            <div className="container">
                <Slider items={items} />
            </div>
        </div>
    )
}
