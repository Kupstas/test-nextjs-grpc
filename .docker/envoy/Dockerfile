FROM envoyproxy/envoy-alpine:v1.14.1

ENV WAITFORIT_VERSION="v1.4.0"

RUN apk add --update libintl && \
    apk add --virtual build_deps gettext &&  \
    cp /usr/bin/envsubst /usr/local/bin/envsubst && \
    apk del build_deps
RUN apk add curl
RUN apk add busybox-extras

RUN curl -o /usr/local/bin/waitforit -sSL https://github.com/maxcnunes/waitforit/releases/download/$WAITFORIT_VERSION/waitforit-linux_amd64  && \
    chmod +x /usr/local/bin/waitforit

COPY entrypoint.sh /entrypoint.sh
COPY config.template.yaml /etc/config.template.yaml
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
CMD ["envoy", "-c", "/etc/envoy/envoy.yaml", "-l", "error"]
