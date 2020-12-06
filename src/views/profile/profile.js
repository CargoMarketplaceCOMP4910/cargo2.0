
import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
//import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox"
import './../../App.css';
import TextField from '@material-ui/core/TextField';
//importing firebase
import firebase from "../../Firebase/firebase";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
//import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import {BeatLoader} from 'react-spinners';

//custom components from dependecies
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import safeStringify from "safe-json-stringify";
import { container } from "assets/jss/material-kit-react";


//const useStyles = makeStyles(styles);

export default function Components(props) {
  const {match:{params}} = props;
  const classes = useStyles();
  console.log('Product Detail Screen');
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setisOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0);
  const [mobileDevice, setMobileDevice] = useState(window.innerWidth);
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  
  

  const handleSignup = () => {
    const { dispatch } = props;
    //const { firstName, lastName, email, password } = this.state;
    //dispatch(signupNewUser(firstName, email, password));
    //setRedirect(true);

  };

  let layoutNumber = 6
  if(mobileDevice <= 570) {
    layoutNumber = 12;
  } else {
    layoutNumber =6
  }
  if(item==null){
    console.log("Object Empty")
  }

    //console.log("From Product detail ==>" + JSON.stringify(item.Name));

     const urls = item.Pictures; // varaible to store all the pcitures of that product
     //useEffect==>component did mount
     useEffect(()=>{
      //creating the listener that will listen to the new changes to the product collection
          console.log('useEffect in product detail screen: '+params.productId);
          if(props.location.state==null){
            console.log("The man who: "+ params.productId);
            var productId = params.productId;
        
          firebase.firestore().collection('Products').doc('6ZhJGTsy1lRtpNFSkWpc').get().then((doc)=>{
            var data = doc.data();
            setItem(data);
            console.log(JSON.stringify(data));
            setIsLoading(false);
      
          }).catch((exception)=>{
            console.log('We get the following exception while fetching the product: '+ exception);
          });
          }
          else{
          setItem(JSON.parse(props.location.state));
          setIsLoading(false);
          }

    }, []);

  const { ...rest } = props;
  if(isLoading==false){
      return (
        <div>
          <Header
            brand="CarGo"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />
          
          <div className={classes.root}>
      
    </div>
      <div className={classes.root}>
      <Grid container spacing={3}  direction="row">
        
        <Grid item xs={2} justify="center" alignItems="center" direction="row">
            
        </Grid>
        <Grid item xs={3} justify="center" alignItems="center" direction="row">
            <img src={'https://firebasestorage.googleapis.com/v0/b/cargo-web-ecfe4.appspot.com/o/060c2070-199d-11eb-a028-f7ca06087d17?alt=media&token=9fa227e9-5a7b-4f79-af71-0c76146c0ace'}  style={{width:'250px',height:'250px',borderRadius:'50%'}}/>
        </Grid>  
        <Grid item xs={7} >
        <form className={classes.form} noValidate >


<Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <TextField
      autoComplete="fname"
      name="firstName"
      variant="outlined"
      required
      fullWidth
      id="firstName"
      label="First Name"
      autoFocus
      value={firstName}
      onChange={e => setFirstName(e.target.value)}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      variant="outlined"
      required
      fullWidth
      id="lastName"
      label="Last Name"
      name="lastName"
      autoComplete="lname"
      value={lastName}
      onChange={e => setLastName(e.target.value)}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      variant="outlined"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      variant="outlined"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
  </Grid>
{/* <Grid item xs={12}>
<FormControlLabel
control={<Checkbox value="allowExtraEmails" color="primary" />}
label="I want to receive inspiration, marketing promotions and updates via email."
/>
</Grid> */}
</Grid>


<Button  className={classes.customHoverFocus}
type="Update Information"
fullWidth
variant="contained"
color="primary"
className={classes.customHoverFocus}
onClick={() => handleSignup()}
>
Update Information
</Button>

</form>
        </Grid>
        
      </Grid>
    </div>
      
          {isOpen && (
            <div>
              <Lightbox
                mainSrc={urls[photoIndex]}
                nextSrc={urls[(photoIndex + 1) % urls.length]}
                prevSrc={urls[(photoIndex + urls.length - 1) % urls.length]}
                onCloseRequest={() => setisOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex((photoIndex + urls.length - 1) % urls.length)
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + urls.length + 1) % urls.length)
                }
              />
              </div>
            )}

        </div>
      );
      }
  
        return(
          
            <div>
            <Header
              brand="CarGo"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
            />
            
              <div className={classNames(classes.main)} style={{paddingTop:'250px'}}>
              <BeatLoader
                  sizeUnit={"px"}
                  size={100}
                  color={'#123abc'}
                  loading={isLoading}
                />     
              </div>
          </div>
    );   
}

const newLocal = "center";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:"180px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  container: {
    flexWrap: "wrap",
    marginTop:"120px",
    textAlign:"center",
    width:"100%"
  },
  customHoverFocus: {
    "&": { backgroundColor: "orange",marginTop:"12px",color:"white" },
    "&:hover, &.Mui-focusVisible": { backgroundColor: "orange" }
    
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
