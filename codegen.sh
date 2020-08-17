rm -rf api/generated
mkdir api/generated

DIR=api/proto
OUT_DIR=api/generated

protoc -I=$DIR user.proto \
    --js_out=import_style=commonjs+dts:$OUT_DIR \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR
