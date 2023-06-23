import HeaderHtml from '@/components/HeaderHtml'
import HomePage from './HomePage/HomePage';
import FooterComponent from '@/components/Layouts/FooterComponent';
export default function Home() {
  return (
    <main>
      <HeaderHtml />
      <HomePage />
      <FooterComponent />
    </main>
  )
}
