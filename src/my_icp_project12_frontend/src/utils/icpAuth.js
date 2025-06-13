export const authenticateWithICP = async () => {
    try {
      const identity = await window.ic?.plug?.requestConnect();
      if (!identity) throw new Error("Failed to authenticate");
      return identity.principalId;
    } catch (error) {
      console.error("ICP Authentication Error:", error);
      return null;
    }
  };
  