#!/bin/sh
exec /usr/bin/ssh -o IdentitiesOnly=yes -i ~/.ssh/personal -F /dev/null "$@"