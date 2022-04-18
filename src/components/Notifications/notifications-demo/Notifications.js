import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

import s from './ListGroup.module.scss';

import a3 from '../../../assets/people/a3.jpg';
import a5 from '../../../assets/people/a5.jpg';

class NotificationsDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroup, 'thin-scroll'].join(' ')}>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <img className="rounded-circle" src={a3} alt="..." />
          </span>
          <p className="m-0 overflow-hidden text-light">
            شماره حساب 566651461
            {/* eslint-disable */}
            {/* eslint-enable */}
            <time className="help-block m-0">
              2 دقیقه پیش
            </time>
          </p>
        </ListGroupItem>
        {/* <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <i className="glyphicon glyphicon-upload fa-lg" />
          </span>
          <p className="text-ellipsis m-0">
            2.1.0-pre-alpha just released.
            <time className="help-block m-0">
              5h ago
            </time>
          </p>
        </ListGroupItem> */}
        {/* <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <i className="fa fa-bolt fa-lg" />
          </span>
          <p className="text-ellipsis m-0 overflow-hidden">
            Server load limited.
            <time className="help-block m-0">
              7h ago
            </time>
          </p>
        </ListGroupItem> */}
      
        {/* <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <span className="rounded bg-primary rounded-lg">
              <i className="fa fa-facebook text-white" />
            </span>
          </span>
          <p className="text-ellipsis m-0">
            New <strong>76</strong> facebook likes received.
            <time className="help-block m-0">
              15 Apr 2014
            </time>
          </p>
        </ListGroupItem> */}
        {/* <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, 'thumb-sm'].join(' ')}>
            <span className="circle circle-lg bg-gray-dark">
              <i className="fa fa-circle-o text-white" />
            </span>
          </span>
          <p className="text-ellipsis m-0">
            Dark matter detected.
            <time className="help-block m-0">
              15 Apr 2014
            </time>
          </p>
        </ListGroupItem> */}
      </ListGroup>
    );
  }
}

export default NotificationsDemo;
