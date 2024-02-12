
import './style.scss';

const pageHeaderContent = (props) => {

    const { headerText, icon } = props;

    return (
        <div className='wrapper'>
            <h2>{headerText}</h2>
            <spam>{icon}</spam>

        </div>
    );
};

export default pageHeaderContent;
