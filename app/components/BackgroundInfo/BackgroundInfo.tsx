import Details from '../Details';
import List from '../List';
import ListItem from '../ListItem';
import Summary from '../Summary';

const BackgroundInfo = () => {
    return (
        <Details>
            <Summary>Why remake the schedule?</Summary>
            <p className="my-3">
                While the schedule page is nice, I'm not a fan of:
            </p>
            <List>
                <ListItem>All the scrolling</ListItem>
                <ListItem>Doesn't highlight the next game</ListItem>
                <ListItem>No dark mode</ListItem>
                <ListItem>Too much white space</ListItem>
                <ListItem>Advertisements</ListItem>
            </List>
        </Details>
    );
};

export default BackgroundInfo;
