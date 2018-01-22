# React Timer App - Customised
___

This is the branch where I'll tweak some bits and bobs.

To create a new branch in a repo, do the following:

```git checkout -b "[YOUR BRANCH NAME]"```

The above uses the -b to create a branch, and checkout checks it out.

You'll also be switched to the new branch, so any future commits etc will be on that branch.

To create this "Customisation" branch, and update/save/commit this readme in it, I did the following:

1. Created the branch:

   `git checkout -b "Customisation"`

2. Checked the status, and what files were ready to commit after the readme was edited and saved:

   `git status`

3. Added the newly saved readme file ready for commit:

   `git add readme.md`

4. Checked once more that everything  was ready before committing:

   `git status`

5. Commit our change, along with a sensible message:

   `git commit -a -m 'Updated readme'`

6. Push our changed branch to github:

   `git push -u origin Customisation`

Shoutout to [dillinger.io](http://dillinger.io/) for the cool online markdown preview editor!
