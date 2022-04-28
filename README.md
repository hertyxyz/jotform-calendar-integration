# Jotform - G-Calendar Integration

A simple implementation that transforms webhook data from Jotform into data that
can be sent to Google's Calendar API.

Unless this message has been removed, this is a project that was tossed together
in less than 48 hours. It's better than some certain powershell scripts 😉
(inside joke), but don't expect anthing too special - it's also written in TS
and not a good language (like rust - need to remember to port it 😉) 

## Description

Jotform - G-Calendar Integration (or JCI as I'll refer to it from now on) is a
KISS system to forward webhook calls - albeit with a small amount of in-flight
processing to make sure Google is happy with the data.

The configuration is primarily hard-coded for the time being, but will be made
configurable via JSON if reason presents itself.

## Documentation

### Dependencies

JCI has been developed in TypeScript aroung Node v17.5.0 - I haven't checked
compatability with different versions, so that's on you (YMMV, of course).

### Running JCI

NPM is configured to run the server, so a simple `npm run prod` should run JCI
in production mode.

If you're looking to use the codebase or develop JCI, `npm run dev` will run JCI
in development mode - **DEVELOPMENT MODE IS UNSUITABLE FOR PRODUCTION**.

## Help

This is a small, simple project and is not meant to be used by those who are
unfamiliar with TypeScript.

That said, any problems with the code can be raised by creating a Github issue.

## Authors

Created wholly by [Owen Flaherty](https://github.com/hertyxyz)

## Version History

**Will be updated as of the first \*stable\* release**

## License

Licensed under a private commercial license. This code is not to be used for any
commercial or non-commercial use, and is provided solely for educational value.