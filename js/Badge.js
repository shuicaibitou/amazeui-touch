import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';
import {component} from './InternalPropTypes';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_badge.scss';

const Badge = createReactClass({
  displayName: 'Badge',
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: component,
    href: PropTypes.string,
    amStyle: PropTypes.string,
    // radius: PropTypes.bool,
    rounded: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      classPrefix: 'badge',
      component: 'span'
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      className,
      href,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.amStyle;
    delete props.rounded;

    Component = href ? 'a' : Component;

    return (
      <Component
        {...props}
        className={cx(classSet, className)}
      >
        {this.props.children}
      </Component>
    );
  },
});

export default Badge;
