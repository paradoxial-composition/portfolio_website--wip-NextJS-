
import { BackToTopSection } from './BackToTopStyles'

const BackToTop = () => (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <BackToTopSection href="#top"
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            ↑
        </BackToTopSection>
    </div>
)

export default BackToTop;