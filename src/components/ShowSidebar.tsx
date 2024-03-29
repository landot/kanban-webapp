import eyeIcon from '../assets/images/icon-show-sidebar.svg';
import { ShowSidebarStyles } from './styles/ShowSidebar.styles';

export function ShowSidebar(props: {handleClick: () => void}) {
    return (
        <ShowSidebarStyles data-testid='show-sidebar' onClick={props.handleClick}>
            <img src={eyeIcon} alt="show sidebar icon" />
        </ShowSidebarStyles>
    )
}