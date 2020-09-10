/* This file contains references to the venor libraries we're
using in this project. This is used by webpack in the production
build only. A seperate bundle for vendor code is useful since it's
unlikely to change as often  as the application's code. So all the
libraries we reference ill be written to vendor.js so they can be
cached untill one of them changes. they only have to download vendor.js
when a vendor library changes which would be very less frequent.
any files that arent referenced here are bundled into main.js for the production */

/* eslint-disable no-unused vars */

import fetch from 'whatwg-fetch';
