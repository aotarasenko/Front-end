import { AppIcons } from '../../../../styles/variables';
import { useAuthState } from '../../../../api/auth/authenticate';
import { NavMenuStyled } from './NavMenu.styled';
import { useHistory } from 'react-router';
import { AppButton } from '../../../AppButton/AppButton';

export const NavMenu = () => {
  const user = useAuthState();
  const history = useHistory();

  const menuItems = [
    {
      title: 'My Posts',
      path: '/home',
      icon: AppIcons.home,
      query: '',
    },
    {
      title: 'Feeds',
      path: '/feeds',
      icon: AppIcons.feed,
      query: '',
    },
    { title: 'Favorites', path: '/favorites', query: '', icon: AppIcons.like },
    {
      title: 'Profile',
      path: `/profiles/${user.user.username}`,
      query: `author=${user.user.username}`,
      icon: AppIcons.profile,
    },
  ];

  return (
    <NavMenuStyled>
      {menuItems.map((item) => {
        return (
          <li key={item.title + Math.random()}>
            <AppButton
              type="link"
              content={item.icon}
              handle={() => {
                history.push({
                  pathname: item.path,
                  search: item.query,
                  state: {
                    author: user.user.username,
                    currentUser: true,
                  },
                });
              }}
            />
          </li>
        );
      })}
    </NavMenuStyled>
  );
};
