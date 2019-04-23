# i:trust is the distributed web of trust

> A natural human protocol to make the trust easier, safer, and more pleasant.

### Protocol

- The elegant mathematical portion as the very begining

######### i:trust #########

i       = i               #

:       = :               #

trust   = object          #

object  = multiformats|*  # 

i:trust = ${this}         #

${this} = ${cid}|object   #

######### i:trust #########

- Abstract
- * `i` means the very human being
- * `:` stands for the action of `trust`
- * `object` is anything `i` would like to `trust`
- * `multiformats` are the forms `object` may take
- * * It indicates the protocol of [multiformats](multiformats.io)
- * `*` represents any kind of existence
- * `i:trust` is used for `I trust something`
- * `${this}` claims the `reference` to the protocol itself
- * `${cid}|object` tells something is in the form of `cid` or `object`
- * * `${cid}` follows the protocol of `cid` from [ipld](ipld.io)

- Implication
> Trust ought to be like a distributed web
> - Everyone is a unique apex
> - Everyone has a dynamic set of connections, a.k.a, trustees
> - Trust is distributed via a peer-to-peer network topology

### Scenario

There's a world where lives _Alice_, _Bob_, and _Chris_.

There are things like _apple_, _banana_, _cat_, ...

Within the spacetime continuum of the world, _trust_ is evolving ...

... _Alice_ trusts _apple_, _Bob_ trusts _banana_, _Chris_ trusts _cat_ ...

...

... _Alice_ trusts _apple_, _cat_, _Bob_, and ...

... _Bob_ trusts _apple_, _dog_, _Chris_ and ...

... _Chris_ trusts _apple_, _egg_, _Alice_, and ...

...

... _Alice_ trusts _Bob_, _Chris_, and ...

...
