#!/bin/bash

set -e

for plugin in \
    adr \
    annoncements \
    annotator \
    aws \
    badges \
    bookmarks \
    cicd \
    code-climate \
    gcalendar \
    http-request \
    jenkins \
    jira \
    mcp-chat \
    nexus-repository-manager \
    npm \
    playlist \
    quay \
    rbac \
    readme \
    regex \
    servicenow \
    sonarqube \
    todo \
    todo \
    utils \
    wheel-of-names \
    ; do

    echo "    {"
    echo "      \"groupName\": \"$plugin plugin\","
    echo "      \"groupSlug\": \"$plugin\","
    echo "      \"matchPackageNames\": ["
    echo "        \"/$plugin/\""
    echo "      ]"
    echo "    },"

done

