import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  ListSubheader,
  Grid,
  Hidden,
  Switch,
  CssBaseline,




} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useTheme } from '@material-ui/core/styles';


import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    height: '100%',
    background: theme.palette.background.dark
  },
  menuIcon: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(1)
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  grow: {
    flexGrow: '1',
  },
  icons: {
    paddingRight: theme.spacing(2)
  },
  logo: {
    width: '83px'
  },
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
    borderRight: 'none'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listItemText: {
    fontSize: '14px'
  },
  lisItem: {

    paddingTop: '4px',
    paddingBottom: '4px',
  },
  subHeader: {

    textTransform: 'uppercase'
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];


function Home({ darkMode, setDarkMode }) {


  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color='inherit'
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >                <Toolbar>
          <IconButton
            color=""
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuIcon, {
              [classes.hide]: open,
            })}
          >                        <MenuIcon />

          </IconButton>
          <img src={theme.palette.type === 'dark' ? "/images/branco.png" : '/images/preto.png'} alt="logo" className={classes.logo}></img>

          <div className={classes.grow}></div>
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons}></Switch>
          <IconButton className={classes.icons} >
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} >
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} >
            <MoreVertIcon />
          </IconButton>
          <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">FAZER LOGIN</Button>


        </Toolbar>
      </AppBar>

      <Box display="flex">

        <Hidden mdDown>


          <Drawer


            className={classes.drawer}
            variant="permanent"

            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}

          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>



            <div className={classes.drawerContainer}></div>
            <List>
              <ListItem button classes={{ root: classes.lisItem }} >
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Inicio'} />
              </ListItem>
              {/*  */}

              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Em alta'} />
              </ListItem>

              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Inscrições'} />
              </ListItem>


            </List>
            <Divider />

            <List>
              <ListItem button classes={{ root: classes.lisItem }} >
                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Biblioteca'} />
              </ListItem>
              {/*  */}

              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Historico'} />
              </ListItem>
            </List>

            <Divider />

            <Box p={4.5}>
              <Typography variant="body2">
                Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>

              <Box mt={2}>
                <Button size="small" variant="outlined" color="secondary" startIcon={<AccountCircleIcon></AccountCircleIcon>}>
                  FAZER LOGIN

                </Button>
              </Box>
            </Box>
            <Divider></Divider>
            {/* o melhor do yt */}
            <List component='nav' aria-labelledby='nested-list-subheader' subheader={
              <ListSubheader component='div' id='nested-list-subheader' className={classes.subHeader}>
                O Melhor do youtube

              </ListSubheader>


            } >

              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Música'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Esportes'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Jogos'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Filmes'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Notícias'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Ao vivo'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Aprender'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Vídeos do momento'} />


                {/*  */}

              </ListItem>
              {/*  */}
              <ListItem button classes={{ root: classes.lisItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }

                } primary={'Vídeo em 360°'} />


                {/*  */}

              </ListItem>
              {/*  */}

            </List>
          </Drawer>

        </Hidden>


        <Box className={classes.content} p={8}>
          {/* box é o content = conteúdo do site */}
          <Toolbar></Toolbar>
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}

          >
            Recomendados
          </Typography>

          <Grid container spacing={2}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>


        </Box>
      </Box>


    </div>
  )



}


export default Home;