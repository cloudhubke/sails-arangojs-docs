/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}

        <small style={{ maxWidth: 500, lineHeight: '1.5em' }}>
          {siteConfig.tagline}
        </small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/sailsarangojs.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center', backgroundColor: '#acdaff' }}
      >
        <a href="http://www.cloudhub.co.ke" rel="no_opener no_refferer">
          <h2>We are ready to work with you.</h2>
        </a>
        <MarkdownBlock>
          Talk to us. Our team is ready to help you and your business move to
          the next level.
        </MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            title: 'Built on top of SailsJs and Waterline',
            content:
              'We love SailsJs and we love waterline. Thats why we cloned waterline and built Sails-ArangoJs on top of it to leverage ' +
              '[the power of sails](https://sailsjs.org/) which provides you with the best experience as a server side NodeJs developer ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/sailsjs.png`,
            imageAlign: 'left',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            title: 'ACID Transactions for your finality gurantee',
            content:
              'Each transaction on ArangoDB secures your gurantee that you data has been securely persisters with Atomicity, Consistency, Isolation and Durability for your highest level of confidence.\n\n Sails-ArangoJS adds no more nor extracts any less.',
            image: `${baseUrl}img/transaction.svg`,
            imageAlign: 'right',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content:
              'When you’re building your application, ultimately what matters most is having the right data model available for the task at hand.',
            image: `${baseUrl}img/arangoicon.png`,
            imageAlign: 'top',
            title: 'One engine. One query language. Multiple models.',
          },
          {
            content:
              'Create schemaless models on the fly and sails-arangojs creates the collections, generated indexes, graph and gives your the power of a pro to get started quickly and easily.',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Seamless Integration',
          },
          {
            content:
              'ArangoDb has the best  documentation  for any modern database out there. Powered by an enthusiastic team, issues are resolved with speed. Updates and new features are released regularly with minimal or no breaking changes.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'top',
            title: 'Comprehensive documentation',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
