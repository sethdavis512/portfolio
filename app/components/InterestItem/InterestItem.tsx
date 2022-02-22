import parse from 'html-react-parser';
import { AboutItemType } from '~/routes';

const InterestItem = ({ item }: { item: AboutItemType }) => (
    <li key={item.text} className="about-item">
        <span className={item.isLink ? 'about-item-link' : 'about-item-text'}>
            {parse(item.text)}
        </span>
    </li>
);

export default InterestItem;
