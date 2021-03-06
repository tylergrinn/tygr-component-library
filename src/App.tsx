import Auth from '@tygr/auth';
import Logo from '@tygr/logo';
import React from 'react';
import Contact from './components/Contact';
import TygrComponent from './components/TygrComponent';

export default function App() {
  return (
    <div className="container">
      <Logo />
      <h1>TyGr Component Library</h1>

      <h3>I would like you to make your own react component library</h3>

      <p>
        I&apos;ve tried to make this library as readable as possible, needing as
        little configuration as possible, and not hiding any ugly code in the
        basement. Even this webpage itself is
        <span style={{ padding: '0 3px' }}>
          <a
            href="https://github.com/tylergrinn/tygr-component-library"
            target="_blank"
          >
            open source
          </a>
        </span>
        and can be easily forked. The best place to start is the @tygr/logo
        repository.
      </p>

      <TygrComponent
        name="@tygr/logo"
        demo="https://tylergrinn.github.io/tygr-logo"
        repo="https://github.com/tylergrinn/tygr-logo"
        component={Logo}
      >
        <p>
          Simply the logo you see above, packaged into node, browser, and
          standalone versions and editable theming with sass.
        </p>
        <p>
          I use this repository to branch off to all other plugins you see
          below.
        </p>
      </TygrComponent>

      <TygrComponent
        name="@tygr/switch"
        demo="https://tylergrinn.github.io/tygr-switch"
        repo="https://github.com/tylergrinn/tygr-switch"
        component={() => <Auth github twitter google />}
      >
        <p>
          Really neat use of react hooks and sass mixins. It strikes me
          there&apos;s more to say about how to use the code than there is code.
          The entire codebase is just 2 files: index.ts and _index.scss.
        </p>
        <p>A good usage example is the @tygr/auth component below</p>
      </TygrComponent>

      <TygrComponent
        name="@tygr/auth"
        demo="https://tylergrinn.github.io/tygr-auth"
        repo="https://github.com/tylergrinn/tygr-auth"
        component={() => <Auth github twitter google />}
      >
        <p>
          Login component for tygr. Allows local authentication as well as
          federated providers.
        </p>
      </TygrComponent>

      <TygrComponent
        name="@tygr/contact"
        demo="https://tylergrinn.github.io/tygr-contact"
        repo="https://github.com/tylergrinn/tygr-contact"
        component={Contact}
      >
        <p>
          I recreated the github and twitter follow buttons in pure css so I
          wouldn&apos;t need to download their javascript files.
        </p>
      </TygrComponent>
    </div>
  );
}
