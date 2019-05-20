import React from "react";
import Head from 'next/head';
import Nav from "./_nav";
import Footer from "./_footer";

const Layout = (props) => {
   let {Title} = props;
   return (
    <div>
        <Nav />
      <Head>
      <title> {Title} </title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
