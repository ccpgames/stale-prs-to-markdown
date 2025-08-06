# Stale PRs to Markdown action

This action converts stale PRs output to markdown

## Inputs

### `staleoutput`

**Required** The output from stale

## Outputs

### `markdown`

The Markdown result

## Example usage
```
uses: ccpgames/stale-prs-to-markdown@v1.1  
with:  
  text: ${{ steps.stale.outputs.staled-issues-prs }}
```
