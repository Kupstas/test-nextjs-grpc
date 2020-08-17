#!/usr/bin/env sh

set -ex

envsubst < /etc/config.template.yaml > /etc/envoy/envoy.yaml

exec $@
