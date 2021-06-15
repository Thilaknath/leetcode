#!/usr/bin/python

import sys
from github import Github
# using an access token
g = Github("")
# Github Enterprise with custom hostname
g = Github(base_url="https://github.tools.sap/api/v3", login_or_token="")

def validation():
    if not sys.argv[1]:
        return "pass in the repository name"
    elif not sys.argv[2]:
        return "pass in branch name"

validation()

org_name  = "fps"
repo_name_full = org_name + "/" + sys.argv[1]
branch_name = sys.argv[2]

print(f'Repository Name: {repo_name_full}')
print(f'Branch Name: {branch_name}')
 
latest_commit = g.get_repo(repo_name_full).get_branch(branch_name).commit
print(f'Latest Commit for the branch: {latest_commit}')